export const formatTel = (tel: string) => {
  return tel.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
};
