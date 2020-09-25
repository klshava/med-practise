 $(document).ready(function () {
  // SUBMIT FORM
  $('#customerForm').submit(function (event) {
    // Prevent the form from submitting via the browser.
    event.preventDefault()

    ajaxPost()
  })

  function ajaxPost () {
    // PREPARE FORM DATA
    var formData = {
      house: $('#house').val(),
      description: $('#description').val(),
      amount: $('#amount').val()

    }

    // DO POST
    $.ajax({
      type: 'POST',
      contentType: 'application/json',
      url: '/api/household/' + window.location.pathname,
      data: JSON.stringify(formData),
      dataType: 'json',
      success: function (customer) {
        window.location = '/main'
      },
      error: function (e) {
        alert('Error HERE!')
        console.log('ERROR: ', e)
      }
    })

    // Reset FormData after Posting
    resetData()
  }

  function resetData () {
    $('#house').val('')
    $('#description').val('')
    $('#amount').val(0)
  }
})

