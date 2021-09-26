export default function callMoment(moment, ...args) {
  return (moment.default || moment)(...args);
}
