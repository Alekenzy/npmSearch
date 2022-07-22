import axios from 'axios';

export default class GetURLs {

    static async getSearched(query) {
        const response = await axios.get(`https://registry.npmjs.org/-/v1/search?text=${query}`);
        return response;
    }

    static async getSearchedItem(query) {
        const response = await axios.get(`https://registry.npmjs.org/${query}`);
        return response;
    }

}

        // это объект
        // id: query
        // versions: [0.0.0, 0.0.1, ..., 18.2.0, ..., 18.3.0...]
        // каждый элемент versions - это объект {
        // description: "adsad"
        // keywords: [keywords]
        // readme: "Полное описание"
        // }
        // сонда описание алу үшін: data.versions[data.versions.length-1].(description or/and readme)