def resta_w_resta(a, b):
    resultado = a  

    while b > 0:  
        resultado -= 1  
        b -= 1  
    
    return resultado  


print(resta_w_resta(10, 3))  
print(resta_w_resta(5, 2))   
print(resta_w_resta(8, 8))  
print(resta_w_resta(4, 0))  
