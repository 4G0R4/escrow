import {
    Text,
    Group
} from '@mantine/core';


const currentYear = new Date().getFullYear()

const FooterComponent = () => {
  return (
    <footer >
        <Group justify='center' mt={10}>
            <a href="#privacy" style={{ textDecoration: 'none' }}>
            <Text c="dimmed" size="sm">Privacy</Text>
            </a>
            <a href="#legal" style={{ textDecoration: 'none' }}>
            <Text c="dimmed" size="sm">Legal</Text>
            </a>
            <a href="#terms" style={{ textDecoration: 'none' }}>
            <Text c="dimmed" size="sm">Terms</Text>
            </a>
            <a href="https://github.com/4G0R4/escrow/issues/new" style={{ textDecoration: 'none' }}>
            <Text c="dimmed" size="sm">Bug Report</Text>
            </a>
            <a href="#" style={{ textDecoration: 'none' }}>
            <Text c="dimmed" size="sm">Analytics</Text>
            </a>
        </Group>
          <Text c='dimmed' size='sm' pt={5} style={{textAlign: 'center'}}>
&copy; ɅGOᏒɅ Software, Inc. {currentYear} | BitEscrow Beta Version 1.0
        </Text>
    </footer>
  );
};

export default FooterComponent;