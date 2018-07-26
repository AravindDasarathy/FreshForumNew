import { helper } from '@ember/component/helper';

export function dateFormatter(params/*, hash*/) {
  return params[0].toDateString();
}

export default helper(dateFormatter);
