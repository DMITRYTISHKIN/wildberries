import { ServiceModel, serviceData } from '../service-monitor/service-monitor.model'

export type HostModel = {
  ID: string,
  NAME: string,
  ENABLED: boolean
  MEMORY: number,
  PROCESS: number,
  DISC: number,
  SERVICES: ServiceModel[]
}

export let hostData: HostModel[] = [
  {
    ID: "1",
    NAME: "host one",
    ENABLED: true,
    MEMORY: Math.floor(Math.random() * 100),
    PROCESS: Math.floor(Math.random() * 100),
    DISC: Math.floor(Math.random() * 100),
    SERVICES: [
      serviceData[0],
      serviceData[3]
    ]
  },
  {
    ID: "2",
    NAME: "host two",
    ENABLED: true,
    MEMORY: Math.floor(Math.random() * 100),
    PROCESS: Math.floor(Math.random() * 100),
    DISC: Math.floor(Math.random() * 100),
    SERVICES: [
      serviceData[1],
      serviceData[2]
    ]
  },
  {
    ID: "3",
    NAME: "host three",
    ENABLED: true,
    MEMORY: Math.floor(Math.random() * 100),
    PROCESS: Math.floor(Math.random() * 100),
    DISC: Math.floor(Math.random() * 100),
    SERVICES: [
      serviceData[4]
    ]
  },
  {
    ID: "4",
    NAME: "host four",
    ENABLED: true,
    MEMORY: Math.floor(Math.random() * 100),
    PROCESS: Math.floor(Math.random() * 100),
    DISC: Math.floor(Math.random() * 100),
    SERVICES: [

    ]
  },
  {
    ID: "5",
    NAME: "host five",
    ENABLED: true,
    MEMORY: Math.floor(Math.random() * 100),
    PROCESS: Math.floor(Math.random() * 100),
    DISC: Math.floor(Math.random() * 100),
    SERVICES: [

    ]
  },
]
