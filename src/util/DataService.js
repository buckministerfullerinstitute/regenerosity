export const DEFAULT_OPTIONS = {
  DATA_URL_PROJECTS: 'https://spreadsheets.google.com/feeds/list/1qVTjOO6hqQ4oBAuJZZwKRVnPn7izl_y_UNn7Nse2VjI/1/public/full?alt=json',
  DATA_URL_PROJECT_KPIS: 'https://spreadsheets.google.com/feeds/list/1qVTjOO6hqQ4oBAuJZZwKRVnPn7izl_y_UNn7Nse2VjI/2/public/full?alt=json'
};

export class DataService {

  /**
   *
   * @param {*} options
   */
  constructor(options = DEFAULT_OPTIONS) {

    this.options = options;
    this.data = null;
  }

  async fetchOrGetProjectById(projectId) {
    const projectEntities = await this.fetchOrGetProjects();
    const theProjectEntity = projectEntities.find((aProjectEntity) => aProjectEntity.id === projectId);
    if (!theProjectEntity) {
      throw new Error(`DataService could not locate Project entity by ID: ${projectId}`);
    } else {
      return theProjectEntity;
    }
  }

  async fetchOrGetProjects() {
    const { projectJson, projectKpiJson } = await this.fetchOrGetData();

    const projectKpiEntities = projectKpiJson.feed.entry.map((projectKpi) => {
      const entity = {};
      Object
        .entries(projectKpi)
        .filter(([key, _]) => {
          return key.startsWith('gsx$');
        })
        .forEach(([key, value]) => {
          const keyPretty = key.replace('gsx$', '');
          entity[keyPretty] = value.$t;
        });
      return entity;
    });

    const projectEntities = projectJson.feed.entry.map((project) => {
      const entity = {};
      Object
        .entries(project)
        .filter(([key, _]) => {
          return key.startsWith('gsx$');
        })
        .forEach(([key, value]) => {
          const keyPretty = key.replace('gsx$', '');
          entity[keyPretty] = value.$t;
        });
      return entity;
    })
    // filter out the draft projects (e.g. the ones marked as not visible)
      .filter((aProjectEntity) => aProjectEntity.visibility !== 'TRUE');

    projectKpiEntities
      .forEach((projectKpiEntity) => {
        const projectEntity = projectEntities.find((projectEntity) => projectEntity.id === projectKpiEntity.projectid);
        if (!projectEntity) {
          // Could be that the project is not yet visible and therefore it's KPIs will not get associated here either.
          return;
        }
        projectEntity.kpis = projectEntity.kpis || [];
        projectEntity.kpis.push(projectKpiEntity);
      });

    // split tags from CSV to Array<string>, also trim leading, trailing whitespaces
    projectEntities.forEach((aProjectEntity) => {
      aProjectEntity.tags = aProjectEntity.tags
        .split(',')
        .map((aTag) => aTag.trim());
    });

    window.projectKpiEntities = projectKpiEntities;
    window.projectEntities = projectEntities;

    return projectEntities;
  }

  async fetchOrGetData() {
    if (!this.data) {
      this.data = await this.fetchData();
    }
    return this.data;
  }

  async fetchData() {
    const [projectResponse, projectKpiResponse] = await Promise.all([
      fetch(this.options.DATA_URL_PROJECTS),
      fetch(this.options.DATA_URL_PROJECT_KPIS)
    ]);

    const [projectJson, projectKpiJson] = await Promise.all([
      projectResponse.json(),
      projectKpiResponse.json()
    ]);

    return {
      projectJson,
      projectKpiJson
    };
  }
}