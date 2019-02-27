import { IContext } from 'ette';
import { isExist } from 'ide-lib-utils';


/**
 * 统一的 response 结构
 *
 * @export
 * @param {IContext} ctx - ette 上下文对象
 * @param {number} [status=200] - 响应 code 
 * @param {*} data - 响应具体内容
 * @param {string} [message='SUCCESS'] - 响应消息文案
 */
export function buildNormalResponse(ctx: IContext, status = 200, data: any, message = 'SUCCESS') {
    ctx.response.status = status;
    ctx.response.body = {
        api: ctx._matchedRoute || 'unknown',
        apiName: ctx._matchedRouteName || 'unknown',
        request: ctx.request.toJSON(),
        data: data || {},
        success: isExist(data), // 如果有数据则为 true，不论数据内容长什么样
        message: message
    };
}