function captureSouls(numSouls) {
    let soulsCaptured = 0;
    for (let i = 0; i < numSouls; i++) {
        soulsCaptured++;
    }
    return soulsCaptured;
}

const numSoulsToCapture = 10;
const capturedSouls = captureSouls(numSoulsToCapture);
console.log(`Captured souls: ${capturedSouls}`);

