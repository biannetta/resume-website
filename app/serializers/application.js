/**
 * A temporary fix to the EmberFire Serializer that was suggested in GH Issue
 * https://github.com/FirebaseExtended/emberfire/issues/614
 *
 * This has been fixed in emberfire's master branch but has not be rolled into
 * a release as of yet
 */
import FirestoreSerializer from 'emberfire/serializers/firestore';

export default class ApplicationSerializer extends FirestoreSerializer {
  normalizeCreateRecordResponse(
    _store,
    _primaryModelClass,
    payload,
    id,
    /*eslint-disable*/
    _requestType
  ) {
    return {
      data: {
        id: id || payload.ref.key,
        attributes: payload.data,
        type: _primaryModelClass.modelName,
      },
    };
  }
}
