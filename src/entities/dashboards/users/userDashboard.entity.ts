import { ObjectId } from 'mongodb';
import { AccountLevel, AccountStatus, AccountType, Gender, Roles, Status } from 'src/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_dashboard')
export class UserDashboard {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    userId: ObjectId = new ObjectId();

    @Column('character varying', { name: 'user_name', unique: true, nullable: false })
    userName: string;

    @Column('character varying', { name: 'password', nullable: false })
    password: string;

    @Column('character varying', { name: 'email', unique: true, nullable: false })
    email: string;

    @Column('character varying', { name: 'email_verified', unique: true, nullable: false, default: false })
    emailVerified: boolean;

    @Column('character varying', { name: 'full_name', nullable: true })
    fullName: string;

    @Column('character varying', { name: 'short_name', nullable: true })
    shortName: string;

    @Column('character varying', { name: 'phone', unique: true, nullable: false })
    phone: string;

    @Column('character varying', { name: 'address', nullable: true })
    address: string;

    @Column('character varying', { name: 'dob', nullable: true, default: new Date() })
    dob: Date = new Date();

    @Column('character varying', { name: 'address', nullable: false, default: Roles.GUEST })
    role: Roles;

    @Column('character varying', { name: 'address', nullable: false, default: Status.OFFLINE })
    status: Status;

    @Column('character varying', { name: 'address', nullable: false, default: AccountStatus.NOT_ACTIVE })
    account_status: AccountStatus;

    @Column('character varying', { name: 'address', nullable: false, default: AccountLevel.LEVEL_0 })
    account_level: AccountLevel;

    @Column('character varying', { name: 'address', nullable: true })
    account_type: AccountType;

    @Column('character varying', { name: 'address', nullable: true })
    gender: Gender;
}
