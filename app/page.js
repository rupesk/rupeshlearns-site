export default function Home() {
  return (
    <main style={{
      maxWidth:"1200px",
      margin:"auto",
      padding:"40px"
    }}>
      
      <nav style={{
        display:"flex",
        justifyContent:"space-between",
        marginBottom:"80px"
      }}>
        <h2>RupeshLearns</h2>

        <div>
          Research | Articles | Projects | About
        </div>
      </nav>

      <section style={{
        display:"flex",
        gap:"60px",
        alignItems:"center"
      }}>

        <div>

          <div style={{
            color:"#2563eb"
          }}>
            Building AI Native Systems
          </div>

          <h1 style={{
            fontSize:"60px"
          }}>
            Rupesh Kumar
          </h1>

          <h3>
            Principal Product Manager, Microsoft
          </h3>

          <p>
            My Learnings, experiments, product insights
            from building product and services for B2B and B2C customers.
          </p>

          <button>
            Explore Research
          </button>

        </div>

        <img
          src="/profile.jpg"
          width="350"
          style={{
            borderRadius:"30px"
          }}
        />

      </section>

      <h2 style={{
        marginTop:"100px"
      }}>
        Research Focus
      </h2>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3,1fr)",
        gap:"20px"
      }}>
        {[
          "AI Agents",
          "RAG",
          "MCP",
          "Evaluation",
          "Model Architecture",
          "AI Strategy"
        ].map(item=>(
          <div
            key={item}
            style={{
              padding:"20px",
              border:"1px solid #ddd",
              borderRadius:"20px"
            }}
          >
            {item}
          </div>
        ))}
      </div>

    </main>
  )
}
