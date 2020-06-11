export default (base64: string | undefined) => {
  if (base64 && base64.includes('data:image/+jfif')) {
    return base64.replace('data:image/+jfif', 'data:image/+jpg');
  }
  return base64
}