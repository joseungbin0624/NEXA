// validationUtils.ts

export const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const isRequiredFieldFilled = (field: any): boolean => {
  return field !== null && field !== undefined && field !== '';
};

// 추가적인 유효성 검증 함수들을 여기에 정의할 수 있습니다.
