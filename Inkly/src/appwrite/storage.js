import { Client, Storage, ID } from "appwrite";
import config from "../config/config";

class StorageService {
  client = new Client();
  storage;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);

    this.storage = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      const uploadFile = await this.storage.createFile({
        bucketId: config.appwriteBucketId,
        fileId: ID.unique(),
        file: file,
      });

      if (uploadFile) return uploadFile;
      else return null;
    } catch (error) {
      throw error;
    }
  }

  async deleteFile(fileId) {
    try {
      const res = await this.storage.deleteFile({
        bucketId: config.appwriteBucketId,
        fileId: fileId,
      });
      if (res) return true;
      else return false;
    } catch (error) {
      throw error;
    }
  }

  async getFilePreview(fileId) {
    try {
      const result = await this.storage.getFilePreview({
        bucketId: config.appwriteBucketId,
        fileId: fileId,
      });

      if (result) return result;
      else return null;
    } catch (error) {
      throw error;
    }
  }
}

const storageService = new StorageService();

export default storageService;
