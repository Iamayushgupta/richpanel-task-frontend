import React from 'react';

function PageConnect() {
  const initiateFacebookLogin = () => {
    const redirectUri = encodeURIComponent(`${window.location.origin}/facebook-auth-callback`);

    const scope = encodeURIComponent('pages_show_list,pages_manage_cta,pages_read_engagement');

    const fbLoginUrl = `https://www.facebook.com/v19.0/dialog/oauth?client_id=704692511822268&redirect_uri=${redirectUri}&scope=${scope}&response_type=EAAKA6gLX0bwBO2sdvy1kJDSB7tyZC6cNOx3W0UNI8xpANZC1cqrgOrDu13WynIqA3swbIz4GgzzytnRnQRa3dCdYNLUhZAedBUZAhUDETOiJ7ZBn3BPIKBvDNsM87v4FMAyCCPF5rJ2yGsDZAlL0tZCfJ6VBzjwTZB7eOqgctN9fmF7ZANZBjA9tPKcwbwdcAk4bqq3pVNZBoMmlLXlYwZDZD`;
    window.location.href = fbLoginUrl;
  };

  return (
    <div className='form-container'>
      <h2>Facebook Page Integration</h2>
      <button onClick={initiateFacebookLogin}>Connect Page</button>
    </div>
  );
}

export default PageConnect;
