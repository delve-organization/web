import {Component, OnInit, ViewChild} from '@angular/core';
import {merge, of as observableOf} from 'rxjs';
import {AvailableRole, UserDto} from './admin.types';
import {AdminService} from './admin.service';
import {MatPaginator, MatSort} from '@angular/material';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {Pageable} from '../common/types/pageable.types';

const AVAILABLE_ROLES: AvailableRole[] = [
    {
        name: 'ROLE_ADMIN',
        icon: 'visibility',
        tooltip: 'ADMIN'
    },
    {
        name: 'ROLE_USER',
        icon: 'face',
        tooltip: 'USER'
    }
];

@Component({
    selector: 'delve-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    @ViewChild(MatPaginator) private paginator: MatPaginator;
    @ViewChild(MatSort) private sort: MatSort;

    public resultsLength = 0;
    public displayedColumns: string[] = ['id', 'name', 'username', 'email', 'roles'];
    public availableRoles: AvailableRole[] = AVAILABLE_ROLES;
    public data: UserDto[] = [];

    public defaultPageable: Pageable = {
        direction: 'asc',
        orderBy: 'id',
        page: 0,
        size: 10
    };

    constructor(private userService: AdminService) {
    }

    ngOnInit() {
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    return this.userService.getUsers(
                        this.sort.active ? this.sort.active : this.defaultPageable.orderBy,
                        this.sort.direction ? this.sort.direction : this.defaultPageable.direction,
                        this.paginator.page ? this.paginator.pageIndex : this.defaultPageable.page,
                        this.paginator.pageSize ? this.paginator.pageSize : this.defaultPageable.size);
                }),
                map(data => {
                    this.resultsLength = data.totalElements;

                    return data.content;
                }),
                catchError(() => {
                    return observableOf([]);
                })
            ).subscribe(data => this.data = data);
    }

    public toggleRole(user: UserDto, availableRole: AvailableRole): void {
        const roleIndex: number = user.roles.indexOf(availableRole.name);

        if (roleIndex >= 0) {
            user.roles.splice(roleIndex, 1);
        } else {
            user.roles.push(availableRole.name);
        }
    }

    public onSubmit(users: UserDto[]): void {
        this.userService.updateUsers(users).subscribe(
            () => {
                this.reloadPage();
            }
        );
    }

    private reloadPage(): void {
        window.location.reload();
    }
}
