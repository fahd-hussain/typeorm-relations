import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  getAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['pets'],
    }); // SELECT * FROM user
  }

  async getOneById({ id }: { id: string }): Promise<User> {
    try {
      const user = await this.userRepository.findOneOrFail(id); // SELECT * FROM user WHERE user.id = id;
      return user;
    } catch (error) {
      throw error;
    }
  }

  createUser({ name }: { name: string }): Promise<User> {
    try {
      const newUser = this.userRepository.create({ name });

      return this.userRepository.save(newUser);
    } catch (error) {
      throw error;
    }
  }

  async updateUser({ id, name }: { id: string; name: string }): Promise<User> {
    try {
      const user = await this.getOneById({ id });

      user.name = name;

      return this.userRepository.save(user);
    } catch (error) {
      throw error;
    }
  }

  async deleteUser({ id }: { id: string }): Promise<User> {
    try {
      const user = await this.getOneById({ id });
      return await this.userRepository.softRemove(user);
    } catch (error) {
      throw error;
    }
  }
}
