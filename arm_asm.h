

#pragma once

#ifndef _H_ARM_ASM
#define _H_ARM_ASM

//ROL
template<typename T>
T CPP_ROL(T n, const int bitN)
{
	const int BITLEN = sizeof(T)*8;
	n = (n >> (BITLEN-bitN)) | (n << bitN);
	return n;
}

//n = (n << (BITLEN-bitN)) | (n >> bitN); 
template<typename T>
T CPP_ROR(T n, const int bitN)
{
	const int BITLEN = sizeof(T)*8;
	n = (n << (BITLEN-bitN)) | (n >> bitN);
	return n;
}

#endif
