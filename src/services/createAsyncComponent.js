// import { lazy } from 'react';

// export const createAsyncComponent = (compPath, compName) => {
//   const compPathCheck = compPath.split('').slice(0, 3).join('');
//   if (compPathCheck === '../') {
//     const compPathNormalized = compPath.split('').slice(3).join('');
//     return lazy(() => {
//       return import(`../${compPathNormalized}`).then(module => {
//         return {
//           ...module,
//           default: module[compName],
//         };
//       });
//     });
//   } else if (compPathCheck === '../../') {
//     const compPathNormalized = compPath.split('').slice(6).join('');
//     return lazy(() => {
//       return import(`../../${compPathNormalized}`).then(module => {
//         return {
//           ...module,
//           default: module[compName],
//         };
//       });
//     });
//   }
// };
