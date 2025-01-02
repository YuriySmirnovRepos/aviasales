export default function getMessageByErrorCode(errorCode) {
  switch (errorCode) {
    case 400:
      return "Bad Request. Please check your input.";
    case 401:
      return "Unauthorized. Please log in.";
    case 403:
      return "Forbidden. You do not have permission.";
    case 404:
      return "Not Found. The requested resource could not be found.";
    case 500:
      return "Internal Server Error. Please try again later.";
    default:
      return "An unknown error occurred.";
  }
}
