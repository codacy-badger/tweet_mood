describe("Button", function() {

  var button

  beforeEach(function() {
    button = new Button()
  })

  describe("renderSpinnerClass", function() {
    it("returns the spinnner class information", function() {
      result = button.renderSpinnerClass()
      exepct(result).toEq("spinner-border spinner-border-sm")
    })
  })

  describe("render", function() {
    it("returns the button html", function() {
      expect(button.render()).toEqual('<button id="button_loader" name="analyse" class="btn btn-custom btn-block mb-2" type="submit"><span id="button-text">click to find out</span><span id="button-spinner" class="" role="status" aria-hidden="false"></span></button>')
    })
  })
})
