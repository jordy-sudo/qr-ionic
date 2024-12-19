// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appUrl: 'http://210.17.1.109:99',
  appUrlDev: 'http://localhost:3000/api/v1/cresa',
  appUrlIcesa: 'http://192.168.82.51:97/api',
  appUrlCrecos: 'http://192.168.82.93:4961/CAR_ServicioRecaudoCia01/api',
  appUrlCresa: 'http://desarrollocrecoscorp.com/resources/api',
  jwtSecret: 'CRISISCREDITOCLIENTES',
  secretKey: 'CRESACREDITOSCLIENTES',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
