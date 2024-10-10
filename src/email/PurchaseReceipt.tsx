import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Tailwind,
} from '@react-email/components';
import OrderInformation from './components/OrderInformation';

type PurchaseReceiptEmailProps = {
  product: {
    name: string;
    imagePath: string;
    description: string;
  };
  order: { id: string; createdAt: Date; pricePaidInCents: number };
  downloadVerificationId: string;
};

const PurchaseReceiptEmail = ({
  product,
  order,
  downloadVerificationId,
}: PurchaseReceiptEmailProps) => {
  return (
    <Html>
      <Preview>Download {product.name} and view receipt</Preview>
      <Tailwind>
        <Head />
        <Body className='font-sans bg-white'>
          <Container className='max-w-1'>
            <Heading>Purchase Receipt</Heading>
            <OrderInformation
              order={order}
              product={product}
              downloadVerificationId={downloadVerificationId}
            />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
export default PurchaseReceiptEmail;

PurchaseReceiptEmail.PreviewProps = {
  product: {
    name: 'Product name',
    imagePath: '</products/39b7c2e5-0f4d-46e0-bc90-5a0f14be7e60-Next_02.png',
    description: 'some description',
  },
  order: {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    pricePaidInCents: 10000,
  },
  downloadVerificationId: crypto.randomUUID(),
} satisfies PurchaseReceiptEmailProps;
