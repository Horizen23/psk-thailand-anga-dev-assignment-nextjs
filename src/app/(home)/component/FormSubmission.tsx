import service from '@/services/cms/service';
import { useRouter } from 'next/navigation';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 946px;
  margin: 0 auto;
  padding: 20px;
  .error {
    color : red;
  }
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto;
  width: 142px;
  height: 38px;

  @media (min-width: 1280px) {
    width: 175px;
    height: 47px;
  }
`;

const Title = styled.h2`
  margin-top: 23px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  color: #333;
  line-height: 1.4;

  @media (min-width: 1280px) {
    font-size: 35px;
  }
`;

const Subtitle = styled.div`
  margin-top: 4px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  color: #666;

  @media (min-width: 1280px) {
    font-size: 22px;
  }
`;

const Form = styled.form`
  margin-top: 25px;
  max-width: 946px;
  margin-left: auto;
  margin-right: auto;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  &.half-width {
    display: inline-block;
    width: calc(50% - 10px);
  }

  &.half-width:nth-child(1),  &.half-width:nth-child(4) {
    margin-right: 20px;
  }
`;

const Label = styled.label`
  display: none;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxGroup = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  ul {
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  padding: 0; 
  list-style-type: none; 
}

li {
  padding: 10px;
}
`;

const Checkbox = styled.li`
  list-style-type: none;
  margin-bottom: 5px;
  input  {
    margin-right: 10px
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
const FormContainer = styled.form`
  margin-top: 25px;
`;
const LoadingIndicator = styled.div`
  text-align: center;
  font-size: 16px;
  color: #666;
`;


type FormInputs = {
  name: string;
  email: string;
  websiteOrFacebook: string;
  tel: string;
  budget: string;
  services: string[];
};

const BusinessForm: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>({
    defaultValues: {
      name: 'John Doe',
      email: 'com100pb@gmail.com',
      websiteOrFacebook: 'https://example.com',
      tel: '123-456-7890',
      budget: "THB 50,000 - 100,000",
      services: ["SEO"],
    }
  });
  const router = useRouter()
  const onSubmit: SubmitHandler<FormInputs> = async data =>{
    setLoading(true);
    router.prefetch("submission/success")
    let res = await service.submission(data)
    setLoading(false);
    if (res.success) {
      router.push("submission/success")
    }else {
      alert(res?.data?.data?.error ?? 'error')
    }
  };


  return (
    <Container>
      <Logo
        src="https://anga.co.th/wp-content/themes/custom/dist/images/logo-1x.png"
        srcSet="https://anga.co.th/wp-content/themes/custom/dist/images/logo-1x.png 1x, https://anga.co.th/wp-content/themes/custom/dist/images/logo-2x.png 2x"
        alt="แองก้า"
        width="140"
        height="38"
      />
      <Title>ให้แองก้าเป็นพาร์ทเนอร์ธุรกิจด้านการตลาด</Title>
      <Subtitle>
        <p>รับการตอบกลับภายใน 2 ชั่วโมง</p>
      </Subtitle>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormGroup className="half-width">
          <Input {...register('name', { required: true })} placeholder="ชื่อ *" />
          {errors.name && <span className={"error"}>Name is required</span>}
        </FormGroup>
        <FormGroup className="half-width">
          <Input {...register('email', { required: true })} type="email" placeholder="อีเมล *" />
          {errors.email && <span className={"error"}>Email is required</span>}
        </FormGroup>

        <FormGroup >


          <Input {...register('websiteOrFacebook', { required: true })} placeholder="เว็บไซต์ธุรกิจ หรือ Facebook Page *" />
          {errors.websiteOrFacebook && <span className={"error"}>Website or Facebook Page is required</span>}
        </FormGroup>
        <FormGroup className="half-width">

          <Input {...register('tel', { required: true })} type="tel" placeholder="เบอร์ติดต่อ *" />
          {errors.tel && <span className={"error"}>Tel. is required</span>}
        </FormGroup>
        <FormGroup className="half-width">


          <Select {...register('budget', { required: true })}>
            <option value="" disabled selected>บัทเจ็ทรายเดือน *</option>
            <option value="THB 30,000 - 50,000">THB 30,000 - 50,000</option>
            <option value="THB 50,000 - 100,000">THB 50,000 - 100,000</option>
            <option value="THB 100,000 - 300,000">THB 100,000 - 300,000</option>
            <option value="THB 300,000 - 1,000,000">THB 300,000 - 1,000,000</option>
            <option value="> THB 1,000,000">&gt; THB 1,000,000</option>
          </Select>
          {errors.budget && <span className={"error"}>Budget is required</span>}
        </FormGroup>

        <FormGroup >
        <CheckboxGroup>
          <label>Services <span className={"error"}>*</span></label>
          <ul>
          <Checkbox>
            <input type="checkbox" {...register('services', { required: true })} value="SEO" />
            <label>SEO</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" {...register('services', { required: true })} value="Ecommerce & CPAS" />
            <label>Ecommerce & CPAS</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" {...register('services', { required: true })} value="Google Ads" />
            <label>Google Ads</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" {...register('services', { required: true })} value="Facebook Ads" />
            <label>Facebook Ads</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" {...register('services', { required: true })} value="Lead Generation (B2B)" />
            <label>Lead Generation (B2B)</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" {...register('services', { required: true })} value="Social Media Marketing" />
            <label>Social Media Marketing</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" {...register('services', { required: true })} value="Website Development" />
            <label>Website Development</label>
          </Checkbox>
          <Checkbox>
            <input type="checkbox" {...register('services', { required: true })} value="TikTok Ads" />
            <label>TikTok Ads</label>
          </Checkbox>
          </ul>
        </CheckboxGroup>
        {errors.services && <span className={"error"}>At least one service is required</span>}

        </FormGroup>
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'กำลังส่ง...' : 'ส่งถึงเรา'}
        </SubmitButton>
        {loading && <LoadingIndicator>กำลังส่งข้อมูล โปรดรอสักครู่...</LoadingIndicator>}
      </FormContainer>
    </Container>
  );
};

export default BusinessForm;
