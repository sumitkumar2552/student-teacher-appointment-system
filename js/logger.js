export function logAction(action, info) {
  console.log({
    action,
    info,
    time: new Date().toISOString()
  });
}
