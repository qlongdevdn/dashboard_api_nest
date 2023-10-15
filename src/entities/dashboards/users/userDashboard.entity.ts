import { ObjectId } from 'mongodb';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users_dashboard')
export class UserDashboard {
    @PrimaryGeneratedColumn({ name: 'user_id' })
    userId: ObjectId = new ObjectId();
}
