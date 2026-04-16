/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-50 selection:bg-accent/30 selection:text-brand-950">
      <Navbar />
      <Hero />
      <Story />
      <Menu />
      <Gallery />
      <Footer />
    </main>
  );
}
