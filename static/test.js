async function testD4()
{
    const response = await fetch("/roll-d4")
    const pingResponse = await response.text()
    document.getElementById("d4-test").innerHTML = pingResponse
}

async function testD6()
{
    const response = await fetch("/roll-d6")
    const pingResponse = await response.text()
    document.getElementById("d6-test").innerHTML = pingResponse
}

async function testD8()
{
    const response = await fetch("/roll-d8")
    const pingResponse = await response.text()
    document.getElementById("d8-test").innerHTML = pingResponse
}

async function testD10()
{
    const response = await fetch("/roll-d10")
    const pingResponse = await response.text()
    document.getElementById("d10-test").innerHTML = pingResponse
}

async function testD12()
{
    const response = await fetch("/roll-d12")
    const pingResponse = await response.text()
    document.getElementById("d12-test").innerHTML = pingResponse
}

async function testD20()
{
    const response = await fetch("/roll-d20")
    const pingResponse = await response.text()
    document.getElementById("d20-test").innerHTML = pingResponse
}

async function testPing()
{
    const response = await fetch("/api/ping")
    const pingResponse = await response.text()
    document.getElementById("ping-test").innerHTML = pingResponse
}

async function testVersion()
{
    const response = await fetch("/version")
    const pingResponse = await response.text()
    document.getElementById("version-test").innerHTML = pingResponse
}

testD4()
testD6()
testD8()
testD10()
testD12()
testD20()
testPing()
testVersion()