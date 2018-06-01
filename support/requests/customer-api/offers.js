const Base = require('./$base')

class DeliverersRequest extends Base {
  constructor(build) {
    super()
  }
  get method() {
    return 'POST'
  }
  get path() {
    return 'offers'
  }
  get body() {
    return {
        "productId": "2",
        "quantity": "2",
      	"deliveryPoint": {
      		"latitude": "27.670799",
      		"longitude": "105.1599679,16"
      	}
    }
  }
  static get Builder() {
    class Builder {
         constructor() {

         }
         build() {
            return new DeliverersRequest(this)
         }
      }
      return Builder
  }
}

module.exports = DeliverersRequest
