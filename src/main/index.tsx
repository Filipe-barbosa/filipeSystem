import React from 'react';
import { render } from 'react-dom';
import { Router } from '@/presentation/components';
import '@/presentation/styles/global.scss';

const rootElement = document.getElementById('main');

render(<Router />, rootElement);
