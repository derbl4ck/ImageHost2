import { Container } from 'typedi';
import { Connection } from 'typeorm';

import { Image } from '../../src/api/models/Image';
import { ImageService } from '../../src/api/services/ImageService';
import { closeDatabase, createDatabaseConnection, migrateDatabase } from '../utils/database';
import { configureLogger } from '../utils/logger';

describe('ImageService', () => {

    // -------------------------------------------------------------------------
    // Setup up
    // -------------------------------------------------------------------------

    let connection: Connection;
    beforeAll(async () => {
        configureLogger();
        connection = await createDatabaseConnection();
    });
    beforeEach(() => migrateDatabase(connection));

    // -------------------------------------------------------------------------
    // Tear down
    // -------------------------------------------------------------------------

    afterAll(() => closeDatabase(connection));

    // -------------------------------------------------------------------------
    // Test cases
    // -------------------------------------------------------------------------

    test('should create a new image in the database', async (done) => {
        const image = new Image();
        image.id = 'xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx';
        image.file_name = 'test.png';
        const service = Container.get<ImageService>(ImageService);
        const resultCreate = await service.create(image);
        expect(resultCreate.file_name).toBe(image.file_name);

        const resultFind = await service.findOne(resultCreate.id);
        if (resultFind) {
            expect(resultFind.file_name).toBe(image.file_name);
        } else {
            fail('Could not find image');
        }
        done();
    });

});
