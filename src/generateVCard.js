export function generateVCard(feeEarner) {
  return (
    'BEGIN:VCARD\r\n' +
    'VERSION:4.0\r\n' +
    `FN:${feeEarner.firstName} ${feeEarner.lastName}\r\n` +
    `N:${feeEarner.lastName};${feeEarner.firstName};;;\r\n` +
    `TEL;TYPE=home:tel:${feeEarner.phone}\r\n` +
    `EMAIL;PREF=1:${feeEarner.email}\r\n` +
    `TITLE:${feeEarner.role}, ${feeEarner.department}\r\n` +
    'END:VCARD\r\n'
  );
}