import React from 'react';

export const Card = ({id, name, sprites = []}) => {
    const mainImage = sprites[0]; // Toma la primera (y única)
    
    return (
        <section style={{height: 250, padding: '20px'}}>
            <h2 className="text-capitalize"># {id} - {name}</h2>
            
            {/* 1 foto GRANDE centrada */}
            {mainImage && (
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '10px' 
                }}>
                    <img 
                        src={mainImage} 
                        alt={name}
                        style={{
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            borderRadius: '12px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            border: '2px solid #eee'
                        }}
                    />
                </div>
            )}
        </section>
    );
};
