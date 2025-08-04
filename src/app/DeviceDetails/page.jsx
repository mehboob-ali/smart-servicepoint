'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'; 
import { BsPhone, BsTools, BsStarFill, BsArrowLeft } from 'react-icons/bs';
import Button from '@mui/material/Button';

const page = () => {
    const router = useRouter();
    const {brand, model, problem} = router.query;
    
    
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <Button 
                        variant="outlined" 
                        className="mb-4 border-gray-300 text-gray-700 hover:bg-gray-50"
                        onClick={() => router.back()}
                    >
                        <BsArrowLeft className="mr-2" />
                        Back
                    </Button>
                    
                    <div className="text-center">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                            <BsPhone className="mr-2" />
                            Service Details
                        </div>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Mobile Service Details
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Review your selected service details and proceed with your mobile repair or purchase.
                        </p>
                    </div>
                </div>

                {/* Service Details Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                                        <BsTools className="text-2xl" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold">Service Request</h2>
                                        <p className="text-blue-100">Mobile Repair & Sales</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm text-blue-100">Request ID</div>
                                    <div className="text-lg font-semibold">#SSP-{Date.now().toString().slice(-6)}</div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Device Information */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <BsPhone className="mr-2 text-blue-600" />
                                        Device Information
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                                            <div className="text-sm text-blue-600 font-medium mb-1">Selected Brand</div>
                                            <div className="text-lg font-semibold text-gray-900">
                                                {brand || 'Not selected'}
                                            </div>
                                        </div>
                                        
                                        <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                                            <div className="text-sm text-green-600 font-medium mb-1">Selected Model</div>
                                            <div className="text-lg font-semibold text-gray-900">
                                                {model || 'Not selected'}
                                            </div>
                                        </div>
                                        
                                        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                                            <div className="text-sm text-yellow-600 font-medium mb-1">Repair Issue</div>
                                            <div className="text-lg font-semibold text-gray-900">
                                                {problem || 'Not specified'}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Service Features */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                        <BsStarFill className="mr-2 text-yellow-500" />
                                        Service Features
                                    </h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                                <BsStarFill className="text-green-600 text-sm" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">Genuine Parts</div>
                                                <div className="text-sm text-gray-600">Original manufacturer parts</div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                                <BsStarFill className="text-blue-600 text-sm" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">Warranty Included</div>
                                                <div className="text-sm text-gray-600">90-day service warranty</div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                                <BsStarFill className="text-purple-600 text-sm" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">Doorstep Service</div>
                                                <div className="text-sm text-gray-600">Free pickup & delivery</div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                                                <BsStarFill className="text-orange-600 text-sm" />
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900">Same Day Repair</div>
                                                <div className="text-sm text-gray-600">Quick turnaround time</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-8 pt-8 border-t border-gray-200">
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button 
                                        variant="contained" 
                                        size="large"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Proceed with Service
                                    </Button>
                                    <Button 
                                        variant="outlined" 
                                        size="large"
                                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-xl"
                                    >
                                        Modify Details
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;