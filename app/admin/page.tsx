'use client';

import { useState, useEffect } from 'react';
import {
  getInquiries,
  updateInquiryStatus,
  deleteInquiry,
  getOffers,
  toggleOfferStatus,
  addOffer,
  Inquiry,
  Offer,
} from '@/lib/inquiryStore';
import {
  ShieldCheck,
  Filter,
  Trash2,
  CheckCircle,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Tag,
  Plus,
  RefreshCw,
} from 'lucide-react';
import styles from './page.module.css';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'inquiries' | 'timings' | 'offers'>('inquiries');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [branchFilter, setBranchFilter] = useState<'All' | 'Branch 1' | 'Branch 2'>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | 'New' | 'Contacted' | 'Enrolled'>('All');

  // Offers state
  const [offers, setOffers] = useState<Offer[]>([]);
  const [newOfferTitle, setNewOfferTitle] = useState('');
  const [newOfferDesc, setNewOfferDesc] = useState('');
  const [newOfferBranch, setNewOfferBranch] = useState('All Branches');

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    setInquiries(getInquiries());
    setOffers(getOffers());
  };

  const handleStatusChange = (id: string, status: 'New' | 'Contacted' | 'Enrolled') => {
    updateInquiryStatus(id, status);
    refreshData();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this admission inquiry?')) {
      deleteInquiry(id);
      refreshData();
    }
  };

  const handleToggleOffer = (id: string) => {
    toggleOfferStatus(id);
    refreshData();
  };

  const handleAddOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOfferTitle.trim()) return;
    addOffer({
      title: newOfferTitle,
      desc: newOfferDesc,
      branch: newOfferBranch,
      active: true,
    });
    setNewOfferTitle('');
    setNewOfferDesc('');
    refreshData();
  };

  // Filtered inquiries logic
  const filteredInquiries = inquiries.filter((item) => {
    const matchesBranch =
      branchFilter === 'All'
        ? true
        : branchFilter === 'Branch 1'
        ? item.branch.includes('Malmaddi')
        : item.branch.includes('Ignite Prime');
    const matchesStatus = statusFilter === 'All' ? true : item.status === statusFilter;
    return matchesBranch && matchesStatus;
  });

  return (
    <main className={styles.main}>
      {/* Admin Hero Header */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.badge}>
            <ShieldCheck size={16} color="var(--accent-tomato)" />
            <span>Master Admin Panel</span>
          </div>
          <h1 className={styles.title}>
            IGNITE FITNESS <span style={{ color: 'var(--accent-tomato)' }}>DASHBOARD</span>.
          </h1>
          <p className={styles.sub}>
            Manage admission inquiries across Malmaddi & Ignite Prime branches, filter leads, update operating hours, and publish promotional offers.
          </p>
        </div>
      </section>

      {/* Admin Navigation Tabs */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.tabBar}>
            <button
              className={`${styles.tabBtn} ${activeTab === 'inquiries' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('inquiries')}
            >
              <span>Admission Inquiries</span>
              <span className={styles.tabCount}>{inquiries.length}</span>
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'timings' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('timings')}
            >
              <Clock size={16} />
              <span>Branch Timings & Details</span>
            </button>
            <button
              className={`${styles.tabBtn} ${activeTab === 'offers' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('offers')}
            >
              <Tag size={16} />
              <span>Promotional Offers ({offers.filter((o) => o.active).length})</span>
            </button>
          </div>

          {/* TAB 1: INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div>
              {/* Filter Controls */}
              <div className={styles.filterBox}>
                <div className={styles.filterGroup}>
                  <Filter size={16} color="var(--accent-tomato)" />
                  <span className={styles.filterLabel}>Filter by Branch:</span>
                  <div className={styles.btnGroup}>
                    <button
                      className={`${styles.filterChip} ${branchFilter === 'All' ? styles.chipActive : ''}`}
                      onClick={() => setBranchFilter('All')}
                    >
                      All Branches ({inquiries.length})
                    </button>
                    <button
                      className={`${styles.filterChip} ${branchFilter === 'Branch 1' ? styles.chipActive : ''}`}
                      onClick={() => setBranchFilter('Branch 1')}
                    >
                      Branch 1: Malmaddi ({inquiries.filter((i) => i.branch.includes('Malmaddi')).length})
                    </button>
                    <button
                      className={`${styles.filterChip} ${branchFilter === 'Branch 2' ? styles.chipActive : ''}`}
                      onClick={() => setBranchFilter('Branch 2')}
                    >
                      Branch 2: Ignite Prime ({inquiries.filter((i) => i.branch.includes('Ignite Prime')).length})
                    </button>
                  </div>
                </div>

                <div className={styles.filterGroup}>
                  <span className={styles.filterLabel}>Status:</span>
                  <div className={styles.btnGroup}>
                    {(['All', 'New', 'Contacted', 'Enrolled'] as const).map((st) => (
                      <button
                        key={st}
                        className={`${styles.filterChip} ${statusFilter === st ? styles.chipActive : ''}`}
                        onClick={() => setStatusFilter(st)}
                      >
                        {st}
                      </button>
                    ))}
                  </div>

                  <button className={styles.refreshBtn} onClick={refreshData} title="Refresh Inquiries">
                    <RefreshCw size={14} />
                  </button>
                </div>
              </div>

              {/* Inquiries Table / Cards */}
              {filteredInquiries.length === 0 ? (
                <div className={styles.emptyState}>
                  <p>No admission inquiries match the selected branch/status filter.</p>
                </div>
              ) : (
                <div className={styles.inquiryList}>
                  {filteredInquiries.map((item) => (
                    <div key={item.id} className={styles.inquiryCard}>
                      <div className={styles.cardHeader}>
                        <div>
                          <span
                            className={`${styles.statusBadge} ${
                              item.status === 'New'
                                ? styles.statusNew
                                : item.status === 'Contacted'
                                ? styles.statusContacted
                                : styles.statusEnrolled
                            }`}
                          >
                            {item.status}
                          </span>
                          <span className={styles.branchName}>{item.branch}</span>
                        </div>
                        <span className={styles.timeDate}>{item.createdAt}</span>
                      </div>

                      <div className={styles.cardMain}>
                        <h3 className={styles.personName}>{item.name}</h3>
                        <div className={styles.contactDetails}>
                          <a href={`tel:${item.phone}`} className={styles.detailLink}>
                            <PhoneCall size={14} /> {item.phone}
                          </a>
                          {item.email && (
                            <a href={`mailto:${item.email}`} className={styles.detailLink}>
                              <Mail size={14} /> {item.email}
                            </a>
                          )}
                          <span className={styles.planBadge}>{item.plan}</span>
                        </div>

                        {item.message && <p className={styles.messageBox}>"{item.message}"</p>}
                      </div>

                      <div className={styles.cardActions}>
                        <div className={styles.statusButtons}>
                          <span className={styles.actionLabel}>Set Status:</span>
                          <button
                            className={`${styles.actionBtn} ${item.status === 'Contacted' ? styles.btnActive : ''}`}
                            onClick={() => handleStatusChange(item.id, 'Contacted')}
                          >
                            Mark Contacted
                          </button>
                          <button
                            className={`${styles.actionBtn} ${item.status === 'Enrolled' ? styles.btnActive : ''}`}
                            onClick={() => handleStatusChange(item.id, 'Enrolled')}
                          >
                            Mark Enrolled
                          </button>
                        </div>

                        <button
                          className={styles.deleteBtn}
                          onClick={() => handleDelete(item.id)}
                          title="Delete Inquiry"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: TIMINGS */}
          {activeTab === 'timings' && (
            <div className={styles.timingsGrid}>
              <div className={styles.timingCard}>
                <div className={styles.timingHeader}>
                  <MapPin size={20} color="var(--accent-tomato)" />
                  <h3>Branch 1: Malmaddi Branch (Main)</h3>
                </div>
                <p className={styles.timingAddr}>
                  2nd Floor, SP Laxmi Heights, PB Road, near NTTF BRTS Bus Stop, Shanti Nagar, Malmaddi, Dharwad 580001
                </p>
                <div className={styles.timingRow}>
                  <strong>Operating Hours:</strong> Mon – Sat: 6:00 AM – 11:00 PM | Sun: Closed
                </div>
                <div className={styles.timingRow}>
                  <strong>Desks & Helpline:</strong> +91 81979 17330
                </div>
              </div>

              <div className={styles.timingCard}>
                <div className={styles.timingHeader}>
                  <MapPin size={20} color="var(--accent-tomato)" />
                  <h3>Branch 2: Ignite Prime (Gandhi Nagar)</h3>
                </div>
                <p className={styles.timingAddr}>
                  4th Floor, Business Center, PB Road, Gandhinagar, Dharwad 580004
                </p>
                <div className={styles.timingRow}>
                  <strong>Operating Hours:</strong> Mon – Sat: 6:00 AM – 11:00 PM | Sun: Closed
                </div>
                <div className={styles.timingRow}>
                  <strong>Ignite Cafe Hours:</strong> Mon – Sat: 7:00 AM – 9:30 PM
                </div>
                <div className={styles.timingRow}>
                  <strong>Desks & Helpline:</strong> +91 81979 17330
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: OFFERS */}
          {activeTab === 'offers' && (
            <div className={styles.offersContainer}>
              <div className={styles.addOfferBox}>
                <h3>Create New Offer / Announcement</h3>
                <form onSubmit={handleAddOffer} className={styles.offerForm}>
                  <div className={styles.inputGroup}>
                    <label>Offer Title</label>
                    <input
                      type="text"
                      required
                      value={newOfferTitle}
                      onChange={(e) => setNewOfferTitle(e.target.value)}
                      placeholder="e.g. Festival Special 20% Discount"
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Applicable Branch</label>
                    <select
                      value={newOfferBranch}
                      onChange={(e) => setNewOfferBranch(e.target.value)}
                      className={styles.select}
                    >
                      <option value="All Branches">All Branches</option>
                      <option value="Branch 1: Malmaddi">Branch 1: Malmaddi Branch</option>
                      <option value="Branch 2: Ignite Prime">Branch 2: Ignite Prime</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label>Description / Details</label>
                    <input
                      type="text"
                      value={newOfferDesc}
                      onChange={(e) => setNewOfferDesc(e.target.value)}
                      placeholder="e.g. Valid for all college students with valid student ID card."
                      className={styles.input}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ padding: '12px 20px', fontSize: 12 }}>
                    <Plus size={16} />
                    <span>Publish Offer</span>
                  </button>
                </form>
              </div>

              <div className={styles.offerList}>
                <h3>Current Promotional Offers</h3>
                {offers.map((offer) => (
                  <div key={offer.id} className={`${styles.offerCard} ${offer.active ? styles.offerActive : ''}`}>
                    <div className={styles.offerInfo}>
                      <span className={styles.offerBranchBadge}>{offer.branch}</span>
                      <h4>{offer.title}</h4>
                      <p>{offer.desc}</p>
                    </div>

                    <button
                      className={`${styles.toggleBtn} ${offer.active ? styles.toggleActive : ''}`}
                      onClick={() => handleToggleOffer(offer.id)}
                    >
                      {offer.active ? 'Active (Click to Disable)' : 'Inactive (Click to Enable)'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
