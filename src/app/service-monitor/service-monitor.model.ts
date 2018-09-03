export type ServiceModel = {
  ID: string,
  NAME: string,
  TAG: string,
  STATUS: boolean,
  VERSION: string
}

export let serviceData: ServiceModel[] = [
  {
    ID: "1",
    NAME: "service one",
    TAG: "system",
    STATUS: true,
    VERSION: "1.0"
  },
  {
    ID: "2",
    NAME: "service two",
    TAG: "system",
    STATUS: true,
    VERSION: "1.14.2"
  },
  {
    ID: "3",
    NAME: "service three",
    TAG: "user",
    STATUS: true,
    VERSION: "3.14"
  },
  {
    ID: "4",
    NAME: "service four",
    TAG: "user",
    STATUS: true,
    VERSION: "1.0.134"
  },
  {
    ID: "5",
    NAME: "service five",
    TAG: "system",
    STATUS: true,
    VERSION: "1.3"
  },
]
