import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import uuid from 'uuid';

import { EventDispatcher, EventDispatcherInterface } from '../../decorators/EventDispatcher';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Image } from '../models/Image';
import { User } from '../models/User';
import { ImageRepository } from '../repositories/ImageRepository';
import { events } from '../subscribers/events';

@Service()
export class ImageService {

    constructor(
        @OrmRepository() private imageRepository: ImageRepository,
        @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public find(): Promise<Image[]> {
        this.log.info('Find all images');
        return this.imageRepository.find();
    }

    public findByUser(user: User): Promise<Image[]> {
        this.log.info('Find all images of the user', user.toString());
        return this.imageRepository.find({
            where: {
                userId: user.id,
            },
        });
    }

    public findOne(id: string): Promise<Image | undefined> {
        this.log.info('Find all images');
        return this.imageRepository.findOne({ id });
    }

    public async create(image: Image): Promise<Image> {
        this.log.info('Create a new image => ', image.toString());
        image.id = uuid.v1();
        const newImage = await this.imageRepository.save(image);
        this.eventDispatcher.dispatch(events.image.created, newImage);
        return newImage;
    }

    public update(id: string, image: Image): Promise<Image> {
        this.log.info('Update a image');
        image.id = id;
        return this.imageRepository.save(image);
    }

    public async delete(id: string): Promise<void> {
        this.log.info('Delete a image');
        await this.imageRepository.delete(id);
        return;
    }

}
