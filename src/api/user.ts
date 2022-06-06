import { http } from '../utils/index';
export function getCode(param: { uuid: string }) {
  return http.post('/api/getCode', {
    ...param,
  })
}

export  type QuesInfoParam = { 
  uid: number;
  condition: {
    biz_type: number;
    tech_tag?:Array<string>;
  },
  page: number;
  page_count:number;
}
export function getQuesSort(param: QuesInfoParam) {
  return http.post('/api/getQuesSort', {
    ...param,
  })
}