import { RESTDataSource } from "apollo-datasource-rest";

export class ChuckNorrisJokes extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.chucknorris.io/jokes";
  }

  async getAllChuckNorrisCategories() {
    const res = await this.get("categories");
    return res;
  }

  async getChuckNorrisRandomJokesByCategory({
    category,
  }: {
    category: String;
  }) {
    const response = await this.get("random", { category: category });
    return response;
  }
}
