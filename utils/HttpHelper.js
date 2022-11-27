const HttpAction = {
  Get: 'GET',
  Patch: 'PATCH',
  Post: 'POST',
  Put: 'PUT',
  Delete: 'DELETE',
};

const HttpStatusCode = {
  /* Success Response */
  Success: 200,
  SuccessCreate: 201,
  SuccessDelete: 204,

  SuccessUpgradeMembership: 261,
  SuccessCancelWithWarning: 262,

  /* Error - Client Side
   * 400 - Server Error, bad coding or backend error
   * 401 - Error user is not authenticated to access this request.
   * 403 - Error user doesn't have permission to access this request.
   * 404 - Error request details not found.
   */
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  SuccessExpiredTransaction: 407,

  AreaNotCovered: 409,
  NotEnoughPoint: 460,
  NoActiveMembership: 461,
  HasSameActiveMembership: 462,
  DowngradeMembership: 463,
  ProductSoldOut: 464,
  ErrorGeneratingCreditCardToken: 465,
  HasAlreadyPurchasedThisOneTimeOfferBefore: 466,
  OneOfActiveUserPointBoosterIsInTheBundle: 467,
  FitpointsPaymentError: 468,

  InvalidUserBoosterID: 470,
  HasSameActiveBooster: 471,

  SessionFullyBooked: 480,
  WaitingListIsFull: 481,
  SameActiveTrainingSchedule: 482,
  AppointmentIsAlreadyCancelled: 483,
  AppointmentAlreadyStartCantBeCancelled: 484,
  HasFourOrMoreOutstandingAppointments: 485,

  InvalidCateringCheckoutDays: 484,
  InvalidUserCateringStatusForSkipMeal: 485,
  InvalidCantUpdateReceiveMealForFutureDelivery: 486,
  InsufficientRemainingQuota: 487,
  InvalidOrderEatsExtrasWithMembership: 488,
  SomeOfCateringScheduleNotCoveredByMembership: 489,

  UnrecognizedXenditInvoiceExternalID: 491,

  /* Error - Server Side
   * 501 - Server Error, bad coding or backend error
   * 502 - Gateway Error, eg. Can't connnect to DB, Can't connect to third party application.
   */
  InternalServerError: 500,
  BadGateway: 502,
};

export { HttpAction, HttpStatusCode };
