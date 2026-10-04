// Function to test d4 API
async function testD4()
{
    // Calls API
    const response = await fetch("/roll-d4")
    const pingResponse = await response.text()

    // Outputs API response
    document.getElementById("d4-test").innerHTML = pingResponse
}

// Function to test d6 API
async function testD6()
{
    // Calls API
    const response = await fetch("/roll-d6")
    const pingResponse = await response.text()

    // Outputs API response
    document.getElementById("d6-test").innerHTML = pingResponse
}

// Function to test d8 API
async function testD8()
{
    // Calls API
    const response = await fetch("/roll-d8")
    const pingResponse = await response.text()

    // Outputs API response
    document.getElementById("d8-test").innerHTML = pingResponse
}

// Function to test d10 API
async function testD10()
{
    // Calls API
    const response = await fetch("/roll-d10")
    const pingResponse = await response.text()

    // Outputs API response
    document.getElementById("d10-test").innerHTML = pingResponse
}

// Function to test d12 API
async function testD12()
{
    // Calls API
    const response = await fetch("/roll-d12")
    const pingResponse = await response.text()

    // Outputs API response
    document.getElementById("d12-test").innerHTML = pingResponse
}

// Function to test d20 API
async function testD20()
{
    // Calls API
    const response = await fetch("/roll-d20")
    const pingResponse = await response.text()

    // Outputs API response
    document.getElementById("d20-test").innerHTML = pingResponse
}

// Function to test ping API
async function testPing()
{
    // Calls API
    const response = await fetch("/api/ping")
    const pingResponse = await response.text()

    // Outputs API response
    document.getElementById("ping-test").innerHTML = pingResponse
}

// Function to test version API
async function testVersion()
{
    // Calls API
    const response = await fetch("/version")
    const pingResponse = await response.text()

    // Outputs API response
    document.getElementById("version-test").innerHTML = pingResponse
}

// Calls all test functions
testD4()
testD6()
testD8()
testD10()
testD12()
testD20()
testPing()
testVersion()