import { useEffect, useState } from 'react';
import './GitHubRepos.css';

const GITHUB_USERNAME = 'Lasonomi';

function GitHubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchRepos() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=9&type=owner`
        );

        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }

        const data = await response.json();

        // Filter out forks and this portfolio repo itself if desired
        const filtered = data
          .filter((repo) => !repo.fork)
          .slice(0, 6);

        if (!cancelled) {
          setRepos(filtered);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'Gagal memuat repository');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section className="template-section reveal-on-scroll" id="github">
      <div className="section-heading">
        <p className="eyebrow">GITHUB / REPOSITORIES</p>
        <h2>Kumpulan Repository</h2>
        <p className="section-subtitle">
          Repo publik dari{' '}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noreferrer"
            className="github-profile-link"
          >
            @{GITHUB_USERNAME}
          </a>
        </p>
      </div>

      {loading && (
        <div className="github-status">
          <p>Memuat repository dari GitHub...</p>
        </div>
      )}

      {error && (
        <div className="github-status github-status--error">
          <p>{error}</p>
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="neo-button secondary-button"
          >
            Lihat di GitHub
          </a>
        </div>
      )}

      {!loading && !error && repos.length === 0 && (
        <div className="github-status">
          <p>Belum ada repository publik.</p>
        </div>
      )}

      {!loading && !error && repos.length > 0 && (
        <div className="github-grid">
          {repos.map((repo, index) => (
            <article key={repo.id} className="github-card project-card">
              <p className="project-number">
                REPO / {String(index + 1).padStart(2, '0')}
              </p>
              <h3>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="github-card-title"
                >
                  {repo.name}
                </a>
              </h3>
              <p className="github-card-desc">
                {repo.description || 'Tidak ada deskripsi.'}
              </p>
              <div className="badge-list">
                {repo.language && (
                  <span className="github-lang">{repo.language}</span>
                )}
                <span className="github-meta">★ {repo.stargazers_count}</span>
                <span className="github-meta">⑂ {repo.forks_count}</span>
              </div>
              <div className="project-links">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="github-footer-link">
        <a
          href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
          target="_blank"
          rel="noreferrer"
          className="neo-button"
        >
          Lihat Semua di GitHub →
        </a>
      </div>
    </section>
  );
}

export default GitHubRepos;
