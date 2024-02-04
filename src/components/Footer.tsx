import { FlexCenter } from '@/styles/globals';

const Footer = () => {
  return (
    <FlexCenter className="bg-slate-100 text-slate-600 font-xs">
      <div className="narrow-container py-8">
        <p>상호 : 남대문떡집 대표 : 안기용 사업자 등록번호 : 231-87-02433</p>
        <p>
          주소 : 07284 서울 영등포구 선유서로 17 문래동 빅토리테크노 타워 1층{' '}
          <br />
          (주)남대문떡딥 대표전화 : 02-536-3310
        </p>
        <p>
          통신판매업 신고 : 제 2023-서울영등포-2414 호 개인정보관리책임자 : BK
          KIM 이메일 : bk@seolbom.com
        </p>
        <p>
          COPYRIGHT © 주식회사 설봄 ALL RIGHTS RESERVED. HOSTING CAFE24DESIGNED
          By DFLOOR
        </p>
      </div>
    </FlexCenter>
  );
};

export default Footer;
