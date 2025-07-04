import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Shop',
      links: [
        { label: 'Men', href: '/products?category=Men+shoes' },
        { label: 'Women', href: '/products?category=women' },
        { label: 'Running', href: '/products?category=running' },
        { label: 'Lifestyle', href: '/products?category=lifestyle' },
        { label: 'Limited Edition', href: '/products?category=limited' }
      ]
    },
    {
      title: 'Brands',
      links: [
        { label: 'Nike', href: '/products?brand=nike' },
        { label: 'Adidas', href: '/products?brand=adidas' },
        { label: 'Jordan', href: '/products?brand=jordan' },
        { label: 'Puma', href: '/products?brand=puma' },
        { label: 'New Balance', href: '/products?brand=new-balance' }
      ]
    },
    {
      title: 'Support',
      links: [
        // { label: 'Size Guide', href: '/size-guide' },
        // { label: 'Shipping Info', href: '/shipping' },
        // { label: 'Returns', href: '/returns' },
        { label: 'Customer Service', href: '/contact' },
        // { label: 'FAQ', href: '/faq' }
      ]
    },
    // {
    //   title: 'Company',
    //   links: [
    //     { label: 'About Us', href: '/about' },
    //     { label: 'Careers', href: '/careers' },
    //     { label: 'Press', href: '/press' },
    //     { label: 'Privacy Policy', href: '/privacy' },
    //     { label: 'Terms of Service', href: '/terms' }
    //   ]
    // }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-bold text-white mb-4 block">
              SoleStyle
            </Link>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Your destination for premium sneakers and footwear. Discover the latest styles from top brands.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={16} />
                <span>support@solestyle.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={16} />
                <span>1-800-SOLE-STYLE</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={16} />
                <span>123 Sneaker Street, Style City</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get the latest releases and exclusive offers delivered to your inbox.
            </p>
            <form className="flex flex-wrap gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 SoleStyle. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;