// For Program portion of dashboard

const CCVPAmount = document.querySelectorAll('.CCVP');
const CCVPLength = CCVPAmount.length;
const CCVPMessage = document.querySelector('#CCVP');
CCVPMessage.innerHTML = `CCVP = ${CCVPLength}`;

const FUPAmount = document.querySelectorAll('.FUP');
const FUPLength = FUPAmount.length;
const FUPMessage = document.querySelector('#FUP');
FUPMessage.innerHTML = `FUP = ${FUPLength}`;

const HCVAmount = document.querySelectorAll('.HCV');
const HCVLength = HCVAmount.length;
const HCVMessage = document.querySelector('#HCV');
HCVMessage.innerHTML = `HCV = ${HCVLength}`;

const HOPAmount = document.querySelectorAll('.HOP');
const HOPLength = HOPAmount.length;
const HOPMessage = document.querySelector('#HOP');
HOPMessage.innerHTML = `HOP = ${HOPLength}`;

// For Status portion of dashboard

const OTCAmount = document.querySelectorAll('.otc');
const OTCLength = OTCAmount.length;
const OTCMessage = document.querySelector('#otc');
OTCMessage.innerHTML = `OTC = ${OTCLength}`;

const firstExtensionAmount = document.querySelectorAll('.firstExtension');
const firstExtensionLength = firstExtensionAmount.length;
const firstExtensionMessage = document.querySelector('#firstExtension');
firstExtensionMessage.innerHTML = `First Extension = ${firstExtensionLength}`;

const raAmount = document.querySelectorAll('.ra');
const raLength = raAmount.length;
const raMessage = document.querySelector('#ra');
raMessage.innerHTML = `Reasonable Accommodation Extension = ${raLength}`;

const rftaAmount = document.querySelectorAll('.rfta');
const rftaLength = rftaAmount.length;
const rftaMessage = document.querySelector('#rfta');
rftaMessage.innerHTML = `RFTA Submitted = ${rftaLength}`;

const passedUnitAmount = document.querySelectorAll('.passedUnit');
const passedUnitLength = passedUnitAmount.length;
const passedUnitMessage = document.querySelector('#passedUnit');
passedUnitMessage.innerHTML = `Unit passed/pending lease-up = ${passedUnitLength}`;

const leasedAmount = document.querySelectorAll('.leased');
const leasedLength = leasedAmount.length;
const leasedMessage = document.querySelector('#leased');
leasedMessage.innerHTML = `Leased = ${leasedLength}`;