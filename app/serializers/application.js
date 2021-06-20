import RealtimeDatabaseSerializer from 'emberfire/serializers/realtime-database';

export default class ApplicationSerializer extends RealtimeDatabaseSerializer {
  normalizeCreateRecordResponse(_store, _primaryModelClass, payload, id, _requestType) {
    return {
      data: {
        id: id || payload.ref.key,
        attributes: payload.data,
        type: _primaryModelClass.modelName,
      },
    };
  }
}
