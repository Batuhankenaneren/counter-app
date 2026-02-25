let prev = document.getElementById("prev")
let number = document.getElementById("number")
let count = 0

function increment()
{
    count += 1
    number.innerText = count
}

function decrement() {
    if (count === 0) {
  return
}
count -= 1
    number.innerText = count
}

function save()
{
    let countStr = count + " - "
    prev.textContent += countStr
    number.textContent = 0
    count = 0
}

function reset()
{
    number.innerText = 0
    count= 0
}

function clearhistory() 
{
    const isSure = confirm("Are you sure you want to clear previous entries?");

  if (!isSure) {
    return;
  }
  prev.textContent = "Previous entries = ";
  count = 0;
  number.innerText = 0;
}