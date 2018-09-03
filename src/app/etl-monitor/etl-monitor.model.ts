export type EtlErrorModel = {
  TEXT: string,
  DATE: Date
}

export type EtlModel = {
  ID: string,
  NAME: string,
  ENABLED: boolean
  HAS_ERRORS: boolean,
  LAST_START: Date,
  ERRORS?: EtlErrorModel[]
}

export let etlData: EtlModel[] = [
  {
    ID: "1",
    NAME: "etl service one",
    ENABLED: false,
    HAS_ERRORS: true,
    LAST_START: new Date("21-apr-2018"),
    ERRORS: [
      {
        TEXT: "Datebase error",
        DATE: new Date("23-apr-2018")
      }
    ]
  },
  {
    ID: "2",
    NAME: "etl service two",
    ENABLED: false,
    HAS_ERRORS: false,
    LAST_START: new Date("13-feb-2018")
  },
  {
    ID: "3",
    NAME: "etl service three",
    ENABLED: false,
    HAS_ERRORS: false,
    LAST_START: new Date("8-aug-2018")
  },
  {
    ID: "4",
    NAME: "etl service four",
    ENABLED: true,
    HAS_ERRORS: false,
    LAST_START: new Date("9-may-2018")
  },
]
