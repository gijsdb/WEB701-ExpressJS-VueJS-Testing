
  const AddHops = document.querySelector('.AddHops')
  AddHops.addEventListener('submit', (e) => {
    e.preventDefault()
    const variety = AddHops.querySelector('.variety').value
    const amount = AddHops.querySelector('.amount').value
    const bitterness = AddHops.querySelector('.bitterness').value
    const sweetness = AddHops.querySelector('.sweetness').value
    const price = AddHops.querySelector('.price').value
    post('/addhop', { variety, amount, bitterness, sweetness, price })
    alert("Hop added to database")
  })

  function post (path, data) {
    return window.fetch(path, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
 
}
