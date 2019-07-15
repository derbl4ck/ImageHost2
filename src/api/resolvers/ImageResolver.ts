import DataLoader from 'dataloader';
import { Arg, Ctx, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql';
import { Service } from 'typedi';

import { DLoader } from '../../decorators/DLoader';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Context } from '../Context';
import { Image as ImageModel } from '../models/Image';
import { User as UserModel } from '../models/User';
import { ImageService } from '../services/ImageService';
import { Image } from '../types/Image';
import { ImageInput } from '../types/input/ImageInput';

@Service()
@Resolver(of => Image)
export class ImageResolver {

    constructor(
        private imageService: ImageService,
        @Logger(__filename) private log: LoggerInterface,
        @DLoader(UserModel) private userLoader: DataLoader<string, UserModel>
    ) { }

    @Query(returns => [Image])
    public images(@Ctx() { requestId }: Context): Promise<ImageModel[]> {
        this.log.info(`{${requestId}} Find all users`);
        return this.imageService.find();
    }

    @Mutation(returns => Image)
    public async addImage(@Arg('image') image: ImageInput): Promise<ImageModel> {
        const newImage = new ImageModel();
        newImage.file_name = image.file_name;
        return this.imageService.create(newImage);
    }

    @FieldResolver()
    public async owner(@Root() image: ImageModel): Promise<any> {
        if (image.userId) {
            return this.userLoader.load(image.userId);
        }
        // return this.userService.findOne(`${image.userId}`);
    }

    // user: createDataLoader(UserRepository),

    //     imagesByUserIds: createDataLoader(ImageRepository, {
    //         method: 'findByUserIds',
    //         key: 'userId',
    //         multiple: true,
    //     }),

}
